import { JsonObject, JsonProperty } from "json2typescript";
import { v4 } from "uuid";

export interface ITask {
    id: string;
    createdAt: Date;
}

type taskType = 'create' | 'delete' | 'doSomethingElse'


@JsonObject("taskBase")
export abstract class TaskBase implements ITask {
    @JsonProperty("id", String) id: string;
    @JsonProperty("createdAt", Date) createdAt: Date;
    constructor(id: string, createdAt: Date) {
        this.id = id
        this.createdAt = createdAt;

    }
}

@JsonObject("Task")
export class Task extends TaskBase {
    @JsonProperty('taskType') type: taskType
    constructor({ createdAt, type }) {
        super(v4(), createdAt);
        this.type = type;

    }
}