type API<T=object> = {
    "hasError": boolean,
    "statusCode": number,
    "message": {
        "general": unknown[]
    },
    "response": T
}

type Project = {
    "name": string,
    "description": string,
    "status": string,
    "deadline": string,
    "progress": number,
}

type SWR<T> = { data:API<T>, error: unknown, isLoading: boolean }


type CreateProject = {
    name: string,
    description: string,
    status: Status,
    deadline: string,
    progress: number,
}

type Status = "INPROGRESS" | "COMPLETED" | "PENDING"