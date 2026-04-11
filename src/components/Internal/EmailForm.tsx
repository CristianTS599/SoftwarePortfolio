import { Field, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { useState } from "react"
import { toast } from "sonner"
import { Spinner } from "../ui/spinner"

export default function EmailForm() {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    toast.info("Sending Your Message...", { position: "top-center" })

    try {
      const response = await fetch("https://formspree.io/f/xzdjljyz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      if (!response.ok) {
        toast.warning(
          "Encountered an error while sending your message. Try Again.",
          { position: "top-center" }
        )
      }
      if (response.ok) {
        toast.success(
          "I got your message. Thank you for reaching out, I'll get back to you soon!",
          {
            position: "top-center",
          }
        )
        form.reset()
      }
    } catch (error) {
      toast.error("Failed to submit form", { position: "top-center" })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div id="contact" className="mx-3 flex flex-row justify-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <p
            style={{ color: "var(--muted-foreground)" }}
            className="text-sm text-muted"
          >
            // How to contact me
          </p>
          <p className="font-serif text-3xl text-muted-foreground">
            Thank your for visiting, let's start a converstaion
          </p>
        </div>

        <FieldGroup className="w-full md:w-150">
          <Field>
            <FieldLabel htmlFor="NameField">Name</FieldLabel>
            <Input
              id="NameField"
              type="text"
              name="name"
              required
              aria-label="Name Input Field, Required"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="EmailField">Email</FieldLabel>
            <Input
              id="EmailField"
              type="email"
              name="email"
              required
              aria-label="Email Input Field, Required"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="MessageField">Message</FieldLabel>
            <Textarea
              id="MessageField"
              name="message"
              required
              aria-label="Message Input Field, Required"
            />
          </Field>
        </FieldGroup>

        <Button
          className="mt-4 mr-3"
          type="reset"
          variant="outline"
          size="lg"
          aria-label="Submit"
        >
          Clear
        </Button>
        <Button
          className="mt-4 text-emerald-500"
          type="submit"
          variant="outline"
          size="lg"
          aria-label="Submit"
          disabled={isSending}
        >
          {isSending ? (
            <>
              <Spinner data-icon="inline-start" />
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  )
}
