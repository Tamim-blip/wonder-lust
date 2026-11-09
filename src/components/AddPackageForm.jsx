"use client";

import { useState } from "react";
import { Trash2Icon, BookmarkIcon } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { authClient } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";
import { redirect } from "next/navigation";

const CATEGORIES = ["Beach", "Mountain", "City", "Adventure", "Cultural"];

const EMPTY = {
  name: "",
  country: "",
  price: "",
  duration: "",
  departure: "",
  imageUrl: "",
  description: "",
};

const FIELD =
  "h-10 rounded-md border-[#E4E7EC] bg-[#F8FAFC] px-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus-visible:border-[#16A1BF]";
const LABEL = "block text-[15px] font-semibold text-neutral-900 mb-1.5";

function Field({ label, className, children }) {
  return (
    <div className={cn(className)}>
      <label className={LABEL}>{label}</label>
      {children}
    </div>
  );
}

function AddPackageForm() {
  const [values, setValues] = useState(EMPTY);
  const [category, setCategory] = useState("Beach");

  const update = (key) => (event) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const  handleSubmit = async(event) =>{
    event.preventDefault();
   

    try {
      const {data} = await authClient.token()

      const token = data?.token


      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-destinition`, {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          authorization : `Bearer ${token}`
        },
        body : JSON.stringify(values)
      })

      const result = await res.json()

      if(!res.ok){
        toast.add({
          title: "Failed to save destination",
          description: result?.message || "Something went wrong. Please try again.",
          type: "error",
        })
        return
      }

      toast.add({
        title: "Destination saved",
        description: "Your travel package has been added successfully.",
        type: "success",
      })
    } catch {
      toast.add({
        title: "Failed to save destination",
        description: "Something went wrong. Please try again.",
        type: "error",
      })
      return
    }

    redirect('/destination')
  }

  function handleCancel() {
    setValues(EMPTY);
    setCategory("Beach");
  }

  return (
    <div className="rounded-lg bg-white p-10 shadow-[0_6px_30px_rgba(0,0,0,0.08)]">
      <form onSubmit={handleSubmit} className="grid gap-y-6">
        <Field label="Destination Name" className="col-span-2">
          <Input
            placeholder="Bali Paradise"
            value={values.name}
            onChange={update("name")}
            className={FIELD}
            required
          
          />
        </Field>

        <Field label="Country">
          <Input
            placeholder="Indonesia"
            value={values.country}
            onChange={update("country")}
            className={FIELD}
            required
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
            required
          />
        </Field>

        <Field label="Duration">
          <Input
            placeholder="e.g., 7 Days/6 Nights"
            value={values.duration}
            onChange={update("duration")}
            className={FIELD}
            required
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
            required
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
              "h-auto min-h-[130px] py-2.5 leading-6"
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
            Add Travel Package
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddPackageForm;
