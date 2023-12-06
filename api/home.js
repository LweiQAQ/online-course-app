const http = uni.$u.http

export const getSliders = (data) => http.get('/slider/getSliders',{params:data})





