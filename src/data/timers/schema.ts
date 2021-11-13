type TimerSchema = {
  id: string
  name: string
  repetitions: number
  rest: number
  sets: number
  timestamp?: string
  userId?: string
  workout: number
}

export default TimerSchema
