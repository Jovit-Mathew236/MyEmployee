const base = import.meta.env.VITE_BACKEND + "/api/v1/dashboard/"

export const api = {
    user:{
        get: base + 'user/',
        create: base + 'user/create/',
    },
    team: {
        get: base +'team/task/',
        create: base + 'team/task/',
    },
    project: {
        get: base + 'project/',
        create: base + 'project/',
    }
} as const