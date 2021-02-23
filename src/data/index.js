import { designThinkingProcesses as data } from "@/data/api"

const LATENCY = 16

export function getAllData(cb) {
	setTimeout(() => {
		cb(data)
	}, LATENCY)
}
