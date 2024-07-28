import { CheckCircle2, CircleAlert } from "lucide-react";

interface Props {
  message: string;
  status?: "success" | "error" | "no";
}

export function FormAlert({ message, status }: Props) {
  if (status === "success") {
    return (
      <div
        aria-label="form-success-alert"
        className="bg-emerald-600/20 rounded-md border-2 border-emerald-700 px-3 py-2"
      >
        <div className="text-sm font-medium text-emerald-400 flex items-center justify-start">
          <CheckCircle2 className="flex-shrink-0 size-4 mr-2 text-emerald-400" />
          {message}
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        aria-label="form-error-alert"
        className="bg-rose-600/20 rounded-md border-2 border-rose-700 px-3 py-2"
      >
        <div className="text-sm font-medium text-rose-400 flex items-center justify-start">
          <CircleAlert className="flex-shrink-0 size-4 mr-2 text-rose-400" />
          {message}
        </div>
      </div>
    );
  }

  if (status === "no") {
    return null;
  }

  return null;
}
