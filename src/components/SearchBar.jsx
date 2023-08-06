import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from  "@mui/icons-material"
import { Paper , IconButton} from '@mui/material'
export default function SearchBar() {
  const [searchTerm ,setSearchTerm] = useState('') ; 
  const navigate = useNavigate() ; 
  const HandleSubmit =(e)=>{
    e.preventDefault() ; 
   if(searchTerm)
   {
    navigate(`/search/${searchTerm}`) ; 
    setSearchTerm('')
   }
  }
  return (
   <Paper
   component  = "form"
   onSubmit  = {HandleSubmit}
   sx = {{
    borderRadius :20 , 
    border :"1px solid #e3e3e3" , 
    pl:2 ,
    boxShadow :"none" , 
    mr : {sm:5}

   }} 
   >
  <input 
    className='search-bar'
    placeholder='Search..' 
    value = {searchTerm}
    style ={{border:"0px" }}
    onChange={(e)=>{setSearchTerm(e.target.value)}}/>
   <IconButton type = "submit" sx = {{p:'10px' , color :'red'}}>
      <Search/>
   </IconButton>
   </Paper>
  )
}