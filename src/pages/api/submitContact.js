import { supabase } from "src/supabaseClient.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    console.log("Non-POST request received");
    return res.status(405).end(); // Method not allowed
  }

  const { sellerName, sellerEmail, sellerPhone, chosenBuyers } = req.body;

  console.log("Received data: ", {
    sellerName,
    sellerEmail,
    sellerPhone,
    chosenBuyers,
  });

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([
        { 
          sellerName, 
          sellerEmail, 
          sellerPhone, 
          chosenBuyers: JSON.stringify(chosenBuyers)
        }
      ]);

    if (error) {
      console.log("Database error: ", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: "Contact information submitted." });
  } catch (err) {
    console.log("Caught error: ", err);
    return res
      .status(500)
      .json({ error: "Caught error while trying to write to the database." });
  }
}
