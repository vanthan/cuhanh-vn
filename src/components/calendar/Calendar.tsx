'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

// Props của component, nhận vào một danh sách các sự kiện
interface CalendarProps {
  events: { title: string; date: string }[];
}

export default function Calendar({ events }: CalendarProps) {
  // Xử lý khi người dùng click vào một ngày
  const handleDateClick = (arg: any) => {
    alert('Bạn đã click vào ngày: ' + arg.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      dateClick={handleDateClick}
    />
  );
}