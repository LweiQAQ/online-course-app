const http = uni.$u.http

export const getMostNew = (data) => http.post('/course/mostNew',data)

export const searchCourse = (data) => http.post('/course/search',data)










