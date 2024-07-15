import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJobAction } from "@/utils/actions";
import { useToast } from "@/components/ui/use-toast";

function DeleteJobButton({ id }: { id: string }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteJobAction(id),
    onSuccess: () => {
      toast({ description: "job removed" });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });
    },
    onError: () => {
      toast({
        description: "there was an error",
      });
    },
  });
  return (
    <Button size="sm" disabled={isPending} onClick={() => mutate(id)}>
      {isPending ? "deleting" : "delete"}
    </Button>
  );
}

export default DeleteJobButton;
