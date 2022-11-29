import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BoardModel} from "../../models/board.model";

const initialState: BoardModel = {
  statuses: [
    {
      id: "new",
      title: "New task",
      tasks: [
        {
          id: "b08f6e15-5115-41c4-be60-9a23c3fdc1ad",
          label: "Check email",
          time: "0:20h",
          timeColor: "#435E52",
          color: "#ABE9CE",
        },
        {
          id: "17388ecc-1ba5-440e-8b6d-0e0dad71cc97",
          label: "Compare PPC agencies and make a report for Steven",
          time: "3:00h",
          timeColor: "#404784",
          color: "#D8DCFF",
        },
        {
          id: "860f551e-c019-4a2c-9d45-24b9acbe1ad0",
          label: "Meeting with Amanda (PR department)",
          time: "0:30h",
          timeColor: "#435E52",
          color: "#ABE9CE",
        },
        {
          id: "276923ed-ef86-4119-b310-c3b478ad7541",
          label: "Get Patrick's approval for homepage new design",
          time: "0:20h",
          timeColor: "#404784",
          color: "#D8DCFF",
        }
      ]
    },
    {
      id: "scheduled",
      title: "Scheduled",
      tasks: [
        {
          id: "987kasjhd987123",
          label: "Check email",
          time: "0:20h",
          color: "#FFDFBA",
          timeColor: "#662E1E"
        },
        {
          id: "098zx8767362s__23",
          label: "Write a blogpost \"7 best strategies for SEO in 2020\"",
          time: "5:00h",
          color: "#FEC6B7",
          timeColor: "#662E1E"
        },
        {
          id: "87as87z_7s6e",
          label: "New Ad copies for Manamaja",
          time: "2:00h",
          color: "#D9E6A2",
          timeColor: "#4A4D3A"
        }
      ]
    },
    {
      id: "progress",
      title: "In progress",
      tasks: [
        {
          id: "98-_)8as79873*&$",
          label: "Check email",
          time: "0:20h",
          color: "#FFDFBA",
          timeColor: "#662E1E"
        },
        {
          id: "kajshd8&-38(ASD",
          label: "Record a video comment about last week's analytics report",
          time: "0:20h",
          color: "#F2BAE1",
          timeColor: "#8E4778"
        },
        {
          id: "98a0_Z872-39x7S7#$",
          label: "Process all resumes for Content Marketer position",
          time: "1:00h",
          color: "#FFDFBA",
          timeColor: "#662E1E"
        }
      ]
    },
    {
      id: "completed",
      title: "Completed",
      disabled: true,
      tasks: [
        {
          id: "98-_)123908*&$",
          label: "Check email",
          time: "0:20h",
          color: "#FFDFBA",
          timeColor: "#662E1E"
        },
        {
          id: "123S*&Z^&-38(ASD",
          label: "Weekly planning session",
          time: "0:45h",
          color: "#F2BAE1",
          timeColor: "#8E4778"
        },
        {
          id: "12398_)(SD*&z87s873",
          label: "Create 5+ target audiences in Facebook for Samsung ...",
          time: "2:30h",
          color: "#FEC6B7",
          timeColor: "#662E1E"
        },
        {
          id: "12930+_AS)DA(*z8x7NN",
          label: "Check FB Banner Design and give feedback",
          time: "0:20h",
          color: "#D9E6A2",
          timeColor: "#4A4D3A"
        },
        {
          id: "98-_)098123098*&$",
          label: "Check email",
          time: "0:20h",
          color: "#FFDFBA",
          timeColor: "#662E1E"
        },
      ]
    }
  ]
}

interface ReplaceTaskPayload {
  taskID: string;
  oldStatus: string;
  newStatus: string;
  position?: number;
}

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    replaceTask(state, action: PayloadAction<ReplaceTaskPayload>) {
      const currentStatus = state.statuses.find(status => status.id === action.payload.oldStatus)
      if(!currentStatus) return

      const newStatus = state.statuses.find(status => status.id === action.payload.newStatus)
      if(!newStatus) return

      const currentTaskIndex = currentStatus.tasks.findIndex(task => task.id === action.payload.taskID)
      if(currentTaskIndex === -1) return

      if(typeof action.payload.position === "undefined") {
        newStatus.tasks.push(currentStatus.tasks[currentTaskIndex])
        currentStatus.tasks.splice(currentTaskIndex, 1)
        return
      }

      const temp = currentStatus.tasks[currentTaskIndex]
      currentStatus.tasks.splice(currentTaskIndex, 1)
      newStatus.tasks.splice(action.payload.position, 0, temp)
    },
  }
})

export const {
  replaceTask,
} = boardSlice.actions
