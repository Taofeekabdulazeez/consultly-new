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
} from "@/components/ui/alert-dialog";
import { MdDelete } from "react-icons/md";

type Props = {
  onDeleteResource?: (id: string) => void;
  resourceId: string;
  resourceName?: string;
};

export default function ConfirmDelete({
  onDeleteResource,
  resourceId,
  resourceName = "resource",
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="w-full flex items-center gap-3 px-6 py-1.5 text-gray-600 font-medium hover:text-gray-900 hover:bg-gray-50">
          <MdDelete size={18} className="text-gray-500" />
          <span className="text-sm">Delete</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            {resourceName} and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={() => onDeleteResource?.(resourceId)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
