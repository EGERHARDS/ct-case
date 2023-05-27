import { useRouter } from 'next/router'

function ContactPage() {
  const router = useRouter()
  const { id } = router.query

  return <p>Contact buyer: {id}</p>
}

export default ContactPage
