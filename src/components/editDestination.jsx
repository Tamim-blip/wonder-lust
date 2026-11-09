"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  
  
} from "@/components/ui/dialog"
import { useState } from "react";
import { Trash2Icon, BookmarkIcon, PenSquareIcon } from "lucide-react";
import { cn } from "cn";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Field } from "@/components/ui/field"
import { redirect} from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";




const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural"];



const FIELD =
  "h-10 rounded-md border-[#E4E7EC] bg-[#F8FAFC] px-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus-visible:border-[#16A1BF]";




export function EditDestination({destination}) {

  

     const [values, setValues] = useState(destination);
      const [category, setCategory] = useState("Beach");
     
    
      const update = (key) => (event) =>
        setValues((prev) => ({ ...prev, [key]: event.target.value }));
    
      const  handleSubmit = async(event) =>{
        event.preventDefault();

        try {
          const {data} = await authClient.token()

          const token = data?.token

          const {_id, ...updatedData} = values

          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${_id}`, {
              method : "PATCH",
              headers : {
                  "Content-Type" : "application/json",
                  authorization : `Bearer ${token}`
              },
              body : JSON.stringify(updatedData)
          })

          const result = await res.json()

          if(!res.ok || !(result.modifiedCount > 0)){
              toast.add({
                  title: "Failed to save changes",
                  description: result?.message || "Something went wrong. Please try again.",
                  type: "error",
              })
              return
          }

          toast.add({
              title: "Changes saved",
              description: "Your destination has been updated successfully.",
              type: "success",
          })
        } catch {
          toast.add({
              title: "Failed to save changes",
              description: "Something went wrong. Please try again.",
              type: "error",
          })
          return
        }

        redirect(`/destination`)
      }

      
  function handleCancel() {
    setValues(destination);
    setCategory("Beach");
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger render={
             <button
                        type="button"
                        className="flex h-10 items-center gap-2 rounded-md border border-[#E4E4E7] bg-white px-5 text-[15px] font-medium text-[#0C0B0B] transition-colors hover:bg-neutral-50"
                      >
                        <PenSquareIcon size={15} />
                        Edit
                      </button>
        } />
        <DialogContent className="min-w-xl">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-y-6">
        <Field label="Destination Name" className="col-span-2">
          <Input
            placeholder="Bali Paradise"
            value={values.name}
            onChange={update("name")}
            className={FIELD}
          />
        </Field>

        <Field label="Country">
          <Input
            placeholder="Indonesia"
            value={values.country}
            onChange={update("country")}
            className={FIELD}
          />
        </Field>

        <Field label="Category">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger
              className={cn(FIELD, "w-full justify-between hover:bg-[#F8FAFC]")}
            >
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field label="Price (USD)">
          <Input
            type="number"
            min="0"
            step="1"
            placeholder="e.g., 1299"
            value={values.price}
            onChange={update("price")}
            className={FIELD}
          />
        </Field>

        <Field label="Duration">
          <Input
            placeholder="e.g., 7 Days/6 Nights"
            value={values.duration}
            onChange={update("duration")}
            className={FIELD}
          />
        </Field>

        <Field label="Departure Date" className="col-span-2">
          <Input
            type="date"
            value={values.departure}
            onChange={update("departure")}
            className={cn(FIELD, "w-full")}
          />
        </Field>

        <Field label="Image URL" className="col-span-2">
          <Input
            type="url"
            placeholder="https://example.com/image.jpg"
            value={values.imageUrl}
            onChange={update("imageUrl")}
            className={FIELD}
          />
        </Field>

        <Field label="Description" className="col-span-2">
          <Textarea
            rows={4}
            placeholder="Describe the travel experience..."
            value={values.description}
            onChange={update("description")}
            className={cn(
              FIELD,
              "h-auto min-h-32.5 py-2.5 leading-6"
            )}
          />
        </Field>

        <div className="col-span-2 mt-4 flex justify-end gap-5">
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            className="h-12 rounded-md border-[#EF4444] px-6 text-[15px] text-red-500 shadow-none hover:bg-red-50 hover:text-red-500"
          >
            <Trash2Icon />
            Cancel
          </Button>
          <Button
            type="submit"
            className="h-12 rounded-md bg-[#16A1BF] px-6 text-[15px] text-white hover:bg-[#128CA8]"
          >
            <BookmarkIcon />
            Save change
          </Button>
        </div>
      </form>
        </DialogContent>
      </form>
    </Dialog>
  )
}
