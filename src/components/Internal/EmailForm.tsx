import { Field, FieldGroup, FieldLabel } from "../ui/field"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"

export default function EmailForm() {
  return (
    <div id="contact" className="mx-3 flex flex-row justify-center">
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
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
