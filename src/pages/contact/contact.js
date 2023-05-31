import { useBuyer } from "@/context/BuyerContext";
import { useRouter } from 'next/router';

export default function Contact() {
  const { chosenBuyers, removeBuyer } = useBuyer();
  const router = useRouter();

  // implement form submit handling here
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const sellerName = event.target.sellerName.value;
    const sellerEmail = event.target.sellerEmail.value;
    const sellerPhone = event.target.sellerPhone.value;
  
    const dataToSend = {
      sellerName,
      sellerEmail,
      sellerPhone,
      chosenBuyers,
    };
  
    console.log("Sending data:", dataToSend);
  
    const response = await fetch("/api/submitContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
  
    if (response.ok) {
      router.push('/thanks'); 
    } else {
      console.log("Error response:", response);
      alert("An error occurred. Please try again."); // TODO: Handle error in form submission
    }
  };
  

  return (
    <div>
      <h1>Contact Buyers</h1>
     <div id="chosen">
      <h2>Chosen Buyers:</h2>
      {chosenBuyers.map((buyer, index) => (
        <div key={index}>
          <p>ID: {buyer.id}</p>
          <p>Description: {buyer.description}</p>
          <button onClick={() => removeBuyer(buyer.id)}>Remove</button>
        </div>
      ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input name="sellerName" type="text" placeholder="Your Name" required />
        <input
          name="sellerEmail"
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          name="sellerPhone"
          type="tel"
          placeholder="Your Phone Number"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
