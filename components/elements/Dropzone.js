import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {Button} from '@chakra-ui/react'

export default function SoundDropzone({children}) {
  const onDrop = useCallback((acceptedFiles) => {
    // accept="audio/*"
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {children}
    </div>
  )
}