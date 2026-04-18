import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
  name: "address",
  title: "Adressen",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Adress-Name",
      type: "string",
      description: "Ein Anzeigename für diese Adresse (z.B. Zuhause, Arbeit)",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "E-Mail des Nutzers",
      type: "email",
    }),
    defineField({
      name: "street",
      title: "Straße und Hausnummer",
      type: "string",
      description: "Straßenname inklusive Hausnummer (und ggf. Adresszusatz)",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "zipCode",
      title: "Postleitzahl (PLZ)",
      type: "string",
      description: "Postleitzahl (erlaubt Zahlen und Buchstaben für ganz Europa)",
      // Sehr offene Validierung: Mindestens 2, maximal 15 Zeichen
      validation: (Rule) => Rule.required().min(2).max(15), 
    }),
    defineField({
      name: "city",
      title: "Stadt / Ort",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "Bundesland / Region / Kanton",
      type: "string",
      description: "Optional: Wird in vielen europäischen Ländern für den Versand nicht zwingend benötigt.",
    }),
    defineField({
      name: "country",
      title: "Land",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Wähle das Zielland für den Versand aus",
      options: {
        list: [
          // Die Values sind ISO-2 Codes, die Standard-Codes für DHL, UPS, Stripe, etc.
          { title: "Deutschland", value: "DE" },
          { title: "Österreich", value: "AT" },
          { title: "Schweiz", value: "CH" },
          { title: "Belgien", value: "BE" },
          { title: "Dänemark", value: "DK" },
          { title: "Frankreich", value: "FR" },
          { title: "Italien", value: "IT" },
          { title: "Luxemburg", value: "LU" },
          { title: "Niederlande", value: "NL" },
          { title: "Polen", value: "PL" },
          { title: "Spanien", value: "ES" },
          // Du kannst diese Liste jederzeit um weitere Länder ergänzen!
        ],
      },
      initialValue: "DE", // Setzt Deutschland im Studio als Vorauswahl
    })
  ]
});