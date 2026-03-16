import * as z from "zod"
 export const schema=z.object({



  name: z
    .string()
    .nonempty('requaird name')
    .min(3)
    .max(15),

  email: z
    .string()
    .nonempty('requaird name')
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid email format"
    ),

  phone: z
    .string()
    .min(11)
    .max(15)
    .nonempty('requaird phone')
    .regex(/^\d+$/, "Phone must contain only numbers"),

  password: z
    .string()
    .nonempty('requaird password')
    .min(8)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain min 8 caracters, upper, lower, number, and symbol"
    ),

  rePassword: z.string()
})
.refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"]




})


