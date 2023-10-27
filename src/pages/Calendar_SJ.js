import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Button, Form, Card } from 'react-bootstrap';

import ToolBar from '../components/CalendarToolBar.js'

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [note, setNote] = useState('');

  const handleSelect = ({ start, end }) => {
    setSelectedDate(start);
  };

  const addNote = () => {
    setEvents([
      ...events,
      {
        start: selectedDate,
        end: selectedDate,
        title: note,
      },
    ]);
    setNote('');
    setSelectedDate(null);
  };

  const dayPropGetter = (date) => {
    if (selectedDate && moment(date).isSame(selectedDate, 'day')) {
      return {
        style: {
          backgroundColor: '#f0f0f0',
        },
      };
    } else {
      return {};
    }
  };

  return (
    <div>
      <div style={{
            display:"flex",
            marginTop:"2%",
            marginLeft:"5%",}}>

        <Calendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelect}
          views={['month']}
          dayPropGetter={dayPropGetter}
          components={
            {toolbar: ToolBar}
          }
          style ={{
            height:"800px",
            width:"60vw",
          }}
        />
        
        {selectedDate && (
          <Card style={{ 
                  border:"0px",
                  width: '600px',
                  height: "300px",
                  margin: '30px auto',
                  }}>

            <Card.Body style={{ 
                        width: '70%',
                        margin: '20px auto',
                        }}>
            
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    value={note}
                    onChange={e => setNote(e.target.value)}
                    placeholder="메모를 입력하세요"
                    style={{
                      border:"3px solid yellow",
                      borderRadius:"10px",
                      margin:"0px 0px 10px 0px",
                      verticalAlign:"top",
                      width:"90%",
                      height:"150px",
                    }}
                  />
                </Form.Group>
                
                <Button 
                  variant="primary"
                  onClick={addNote}
                  style={{
                      float:"right",
                      border: "0",
                      backgroundColor:"#ffdd1b",
                      color:"black",
                      margin:"10px",
                  }}>                    
                  메모 추가
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
