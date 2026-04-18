import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "invoice",
      type: "object",
      fields: [
        { name: "id", type: "string" },
        { name: "number", type: "string" },
        { name: "hosted_invoice_url", type: "url" },
      ],
    },
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare(select) {
              return {
                title: `${select.product} x ${select.quantity}`,
                subtitle: `${select.price * select.quantity}`,
                media: select.image,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscount",
      title: "Amount Discount",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    
    // --- HIER WURDE DIE ADRESSE FÜR EUROPA OPTIMIERT ---
    defineField({
      name: "address",
      title: "Shipping Address",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Full Name", type: "string" }),
        defineField({ name: "street", title: "Street Address", type: "string" }), // Umbenannt von 'address' in 'street'
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "zip", title: "Zip Code", type: "string" }), // Bleibt ein String für EU-Postleitzahlen
        defineField({ name: "state", title: "State / Province", type: "string" }), // In der EU oft optional
        defineField({ name: "country", title: "Country", type: "string" }), // Neues Feld für den internationalen Versand!
      ],
    }),
    // ----------------------------------------------------

    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Out for Delivery", value: "out_for_delivery" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      // 1. Sicherer Check: Gibt es eine Order ID? Wenn ja, slicen. Wenn nein, zeige "Neu" an.
      const orderIdSnippet = select.orderId 
        ? `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}` 
        : "Neu";

      // 2. Auch die anderen Werte absichern (falls das Dokument gerade erst erstellt wird)
      const customerName = select.name || "Unbekannter Kunde";
      const total = select.amount !== undefined ? select.amount : "0";
      const curr = select.currency || "";
      const mail = select.email || "Keine E-Mail";

      return {
        title: `${customerName} (${orderIdSnippet})`,
        subtitle: `${total} ${curr} ${mail !== "Keine E-Mail" ? `- ${mail}` : ""}`,
        media: BasketIcon,
      };
    },
  },
});