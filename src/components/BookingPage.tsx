import DateReserve from '@/components/DateReserve';
import {TextField, Select, MenuItem} from '@mui/material' ;

export default function BookingPage() {
    return (
        <div className='w-[500px] h-[600px] p-10 bg-slate-100 rounded-lg flex flex-col border border-gray-500 gap-2'>
            <TextField name='Name-Lastname' label='Name-Lastname' variant='standard' className='bg-white rounded'/>
            <TextField name='Contact-Number' label='Contact-Number' variant='standard' className='bg-white rounded'/>
            <Select id='venue' variant='standard' className='bg-white rounded'>
                <MenuItem value='Bloom'>The Bloom Pavilion</MenuItem>
                <MenuItem value='Spark'>Spark Space</MenuItem>
                <MenuItem value='GrandTable'>The Grand Table</MenuItem>
            </Select>
            <DateReserve/>
            <button name='Book Venue' className='rounded-lg px-5 py-2 bg-sky-500 hover:bg-indigo-600 text-white'>Book Venue</button>
        </div>
    ) ;
}