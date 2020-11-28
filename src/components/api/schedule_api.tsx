import {instance} from "./api";

export const Get_Schedule = async () => {
    return instance.get('rest/TimeTable/')
}