import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import { border, borderRadius } from '@mui/system'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';



 export const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setsearch] = useState('');
  
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]); //spread
            
        }

        fetchExercisesData();
    },[])

    
    const handleSearch = async () => {
        if(search) {

            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search) || 
                exercise.bodyPart.toLowerCase().includes(search) || 
                 exercise.equipment.toLowerCase().includes(search) ||
                 exercise.target.toLowerCase().includes(search) 
            );
            setsearch('');
            setExercises(searchedExercises);
            window.scrollTo({ top: 1800, behavior: 'smooth' });
            
        }
    }
  return (
 
    <Stack alignItems="center" mt = '37px' justifyContent="center" padding = "20px">
        <Typography fontWeight={700}
        sx = {{fontSize : {lg :'44px', xs : '30px'}}} textAlign = 'center' mb = "50px">Awsome Exercises You <br /> Should Know</Typography>
        <Box mb = '72px' position = 'relative' >

            <TextField 
            sx = {{
                input : {
                    fontWeight :'600',
                    border : 'none',
                    borderRadius : '4px'
                },
                height : '76px',
                backgroundColor : '#fff',
                width : { lg : '800px' , xs : '370px'},
                textTransform : 'none',
                
                
            }}
          
            value ={search}
            onChange = {(e)=> setsearch(e.target.value.toLowerCase())}
            placeholder = "Search Exercises..."
            type = "text"

            />
            <Button className="search-btn"
            sx = {{
                bgcolor:'#9c27b0',
                fontsize : {lg : '20px', xs : '12px'},
               color : '#fff',
               width : {lg:'156px', xs: '80px'},
               height : '56px',
                position : 'absolute',
                right : '0'

              

            }} 
            onClick = {handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx = {{position :'relative', width : '100%', p:'20px'}} >

           < HorizontalScrollbar data = {bodyParts}
           bodyPart = {bodyPart} setBodyPart = {setBodyPart} />

          
        </Box>
            
    
    </Stack>
  )
}

export default SearchExercises
