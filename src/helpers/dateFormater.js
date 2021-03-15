export default function dateFormater(inputDate){
    const date = new Date(inputDate);
    return date.getFullYear().toString() + "-" + (date.getMonth()+1).toString() + "-" + date.getDate().toString();
}