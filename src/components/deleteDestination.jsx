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
import { authClient } from "@/lib/auth-client"
import { toast } from "@/components/ui/toast"
import { Trash2Icon } from "lucide-react"
import { redirect } from "next/navigation"

export function DeleteDestination({id}) {

    const HandleDelete = async() => {

      try {
        const {data} = await authClient.token()
        const token = data?.token

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destination/${id}`, {
            method : "DELETE",
            headers : {
              authorization : `Bearer ${token}`
            }
        })

        const result = await res.json()

        if(!res.ok || !(result.deletedCount > 0)){
            toast.add({
                title: "Failed to delete destination",
                description: result?.message || "Something went wrong. Please try again.",
                type: "error",
            })
            return
        }

        toast.add({
            title: "Destination deleted",
            description: "The destination has been removed successfully.",
            type: "success",
        })
      } catch {
        toast.add({
            title: "Failed to delete destination",
            description: "Something went wrong. Please try again.",
            type: "error",
        })
        return
      }

      redirect('/destination')
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
