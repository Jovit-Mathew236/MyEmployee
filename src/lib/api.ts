const base = import.meta.env.VITE_BACKEND + "/api/v1/dashboard/"

export const api = {
    user:{
        get: base + 'user/',
        create: base + 'user/create/',
    },
    task: {
        get: base +'task/',
        create: base + 'task/create/',
    },
    project: {
        get: base + 'project/',
        create: base + 'project/',
    }
} as const