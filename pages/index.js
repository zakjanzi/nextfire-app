import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Admin.module.css'
import Loader from '../components/Loader'
import { toast } from 'react-hot-toast'

export default function Home() {
  return (
   <div>
    <button onClick={() => toast.success('hello toast')} >
      Click
    </button>
   </div>
  )
}
