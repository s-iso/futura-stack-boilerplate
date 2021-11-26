export default function() {
    if(process.env.NODE_ENV === "production") {
        return "/api"
    } else {
        return "http://localhost:3010"
    }
}
