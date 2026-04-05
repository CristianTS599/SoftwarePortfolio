import { Field, FieldDescription, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export default function EmailForm() {
  return (
    <div id="contact" className="flex flex-row justify-center">
      <form action="https://formspree.io/f/xzdjljyz" method="POST">
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

        <FieldGroup className="w-150">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input type="text" name="name" required />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type="email" name="email" required />
          </Field>
          <Field>
            <FieldLabel>Message</FieldLabel>
            <Textarea name="message" required />
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
          disabled
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
