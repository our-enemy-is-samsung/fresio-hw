export default function newDateFunction() {
    const date = new Date();
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}