import { useState } from "react"
import { format } from "date-fns" 
import { Button } from "./components/ui/button"
import { Calendar } from "./components/ui/calendar"
import { Input } from "./components/ui/input"
import Calculation from "./components/ui/calculation"
import './App.css'

const formatDateForInput = (date: Date | undefined) => {
  return date ? format(date, 'yyyy-MM-dd') : "";
};

export function App() {


  const [date, setDate] = useState<Date | undefined>(new Date());

  const [inputValue, setInputValue] = useState(formatDateForInput(new Date()));
  
  const [month, setMonth] = useState<Date>(new Date());
  
  const [show, setShow] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    const val = e.target.value; 
    setInputValue(val); 

    if (val) {
      const [year, monthVal, day] = val.split('-');
      const newDate = new Date(Number(year), Number(monthVal) - 1, Number(day));
      
      setDate(newDate);
      setMonth(newDate);

    } else {
      setDate(undefined);
    }
    
    setShow(false); 
  }

  const handleCalendar = (selectedDate: Date | undefined) => {
    setDate(selectedDate); 
    setInputValue(formatDateForInput(selectedDate)); 
    setShow(false); 
  }

  return (
    <>
      <div className="header">
        Age Calculator
      </div>

      <div className="calendarCustom">
        <p>Enter your birth date:</p>

        <Input 
          type="date" 
          value={inputValue}
          onChange={handleInput}
          className="inputClass" 
        />

        <Calendar 
          mode="single" 
          selected={date} 
          onSelect={handleCalendar} 
          month={month}
          onMonthChange={setMonth}
        />
      </div>

      <Button className="calculateButton" onClick={ () => setShow(true) }>
        Calculate
      </Button>
      
      <div className="calculation">
        { show && date && <Calculation date={date} /> }
      </div>
    </>
  )
}

export default App