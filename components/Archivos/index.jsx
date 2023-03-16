import {useState} from 'react'
import { storage } from '@/firebase'
import {
    ref, 
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage'


const Archivos = ({pictoris}) => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange=(e)=>{
        setFile(e.target.files[0])
    }

    const clear=()=>{
        setFile('')
        setPercent(0)
    }

    const handleUpload =()=>{
        !file && alert('Seleccione un archivo parafavaaarr!')
        const storageRef = ref(storage, `/artes/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)
    
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
    
                setPercent(percent)
            },
            (err)=> console.log(err),
            ()=>{
                getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                    console.log(url)
                    setFile(''),
                    pictoris(url)
                    clear()
                })
            }
        )
    }
        


  return (
    <div>
        <input type="file" onChange={handleChange} accept=""/>
        <button onClick={handleUpload}>Cargar</button>
        <p>{percent} "% subido"</p>
    </div>
  )
}

export default Archivos