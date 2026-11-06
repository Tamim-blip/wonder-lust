'use client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2Icon } from "lucide-react"
import { redirect } from "next/navigation"

export function DeleteDestination({id}) {

    const HandleDelete = async() => {

        const res = await fetch(`http://localhost:3001/destination/${id}`, {
            method : "DELETE"
        })

        const data = await res.json()
        if(data.deletedCount > 0) {
            redirect('/destination')
        }
        console.log(data)

    }
  return (
    <AlertDialog>
      <AlertDialogTrigger render={
        <button
                    type="button"
                    className="flex h-10 items-center gap-2 rounded-md border border-[#EF4444] bg-white px-5 text-[15px] font-medium text-red-500 transition-colors hover:bg-red-50"
                  >
                    <Trash2Icon size={15} />
                    Delete
                  </button>
      } />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick = {HandleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
