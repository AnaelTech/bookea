import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import frLocale from '@fullcalendar/core/locales/fr';

export interface Appointment {
  time: string;
  clientName: string;
  initials: string;
  initialsColor: string;
  service: string;
  duration: string;
  staff: string;
  status: 'Confirmé' | 'En attente' | 'Annulé';
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  userName = 'Sophie';
  today = new Date();

  stats = {
    rdv: { value: 12, sub: '3 restants' },
    ca: { value: '487 €', sub: 'Estimé : 620 €' },
    noShows: { value: 1, sub: 'Cet AM' },
    fillRate: { value: '78%', sub: 'Sur la journée' },
  };

  appointments: Appointment[] = [
    {
      time: '14h00',
      clientName: 'Camille Laurent',
      initials: 'CL',
      initialsColor: '#7c9cbf',
      service: 'Coupe + Brushing',
      duration: '45 min',
      staff: 'Sophie',
      status: 'Confirmé',
    },
    {
      time: '14h30',
      clientName: 'Marc Renaud',
      initials: 'MR',
      initialsColor: '#b07cbf',
      service: 'Barbe + Coupe homme',
      duration: '30 min',
      staff: 'Lucas',
      status: 'Confirmé',
    },
    {
      time: '15h15',
      clientName: 'Amina Morel',
      initials: 'AM',
      initialsColor: '#bf957c',
      service: 'Coloration',
      duration: '1h30',
      staff: 'Sophie',
      status: 'En attente',
    },
    {
      time: '16h45',
      clientName: 'Julie Dumont',
      initials: 'JD',
      initialsColor: '#7cbf8e',
      service: 'Soin kératine',
      duration: '1h',
      staff: 'Emma',
      status: 'Confirmé',
    },
    {
      time: '17h30',
      clientName: 'Thomas Petit',
      initials: 'TP',
      initialsColor: '#bfb97c',
      service: 'Coupe homme',
      duration: '20 min',
      staff: 'Lucas',
      status: 'Confirmé',
    },
  ];

  calendarOptions: CalendarOptions = {};

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [resourceTimeGridPlugin],
      initialView: 'resourceTimeGridDay',
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      locale: frLocale,
      headerToolbar: false,
      allDaySlot: false,
      slotMinTime: '09:00:00',
      slotMaxTime: '19:00:00',
      slotDuration: '01:00:00',
      slotLabelFormat: { hour: 'numeric', minute: '2-digit', hour12: false },
      nowIndicator: true,
      height: 'auto',
      initialDate: new Date(2025, 4, 20),
      resources: [
        { id: 'sophie', title: 'Sophie' },
        { id: 'lucas', title: 'Lucas' },
        { id: 'emma', title: 'Emma' },
      ],
      events: [
        {
          resourceId: 'sophie',
          title: 'Léa Martin\nBrushing',
          start: '2025-05-20T13:00:00',
          end: '2025-05-20T14:00:00',
          color: '#c8d4f0',
          textColor: '#3a5fc8',
        },
        {
          resourceId: 'lucas',
          title: 'Paul Simon\nCoupe',
          start: '2025-05-20T13:00:00',
          end: '2025-05-20T13:45:00',
          color: '#c8d4f0',
          textColor: '#3a5fc8',
        },
        {
          resourceId: 'sophie',
          title: 'Camille L.\nCoupe + Brush.',
          start: '2025-05-20T14:00:00',
          end: '2025-05-20T14:45:00',
          color: '#c8d4f0',
          textColor: '#3a5fc8',
        },
        {
          resourceId: 'lucas',
          title: 'Marc R.\nBarbe + Coupe',
          start: '2025-05-20T14:30:00',
          end: '2025-05-20T15:00:00',
          color: '#c8d4f0',
          textColor: '#3a5fc8',
        },
        {
          resourceId: 'sophie',
          title: 'Amina M.\nColoration',
          start: '2025-05-20T15:00:00',
          end: '2025-05-20T16:30:00',
          color: '#f0c8c8',
          textColor: '#c83a3a',
        },
        {
          resourceId: 'emma',
          title: 'Nina Costa\nSoin',
          start: '2025-05-20T15:00:00',
          end: '2025-05-20T16:00:00',
          color: '#c8f0e0',
          textColor: '#2a8a5a',
        },
        {
          resourceId: 'emma',
          title: 'Julie D.\nKératine',
          start: '2025-05-20T16:00:00',
          end: '2025-05-20T17:30:00',
          color: '#c8f0e0',
          textColor: '#2a8a5a',
        },
        {
          resourceId: 'lucas',
          title: 'Thomas P.\nCoupe',
          start: '2025-05-20T17:00:00',
          end: '2025-05-20T17:20:00',
          color: '#c8d4f0',
          textColor: '#3a5fc8',
        },
      ],
      eventContent: (arg) => {
        const lines = arg.event.title.split('\n');
        const name = lines[0] ?? '';
        const service = lines[1] ?? '';
        const start = arg.event.start!;
        const end = arg.event.end!;
        const durationMin = (end.getTime() - start.getTime()) / 60000;
        // Pour les events courts (< 45 min), tout sur une ligne
        if (durationMin < 45) {
          return {
            html: `<div class="fc-event-inner fc-event-inner--compact"><strong>${name}</strong>${service ? `<span> · ${service}</span>` : ''}</div>`,
          };
        }
        return {
          html: `<div class="fc-event-inner"><strong>${name}</strong><span>${service}</span></div>`,
        };
      },
    };
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}
