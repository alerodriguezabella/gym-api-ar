import Program, { ProgramPhaseType, ProgramType } from "../models/Program";

export async function getPrograms() {
    return await Program.find({});
}

export async function getProgram(id: string) {
    return await Program.findById(id).populate(
        {
            path: 'programPhases.workouts',
            populate: { path: 'workoutExercises.exercise', model: 'Exercise' }
        })
}

export async function createProgram({ name, programPhases }: { name: string, programPhases: ProgramPhaseType[] }) {
    return await Program.create({ name, programPhases });
}

export async function deleteProgram(id: string) {
    return await Program.findByIdAndDelete(id);
}

export async function updateProgram(id: string, program: ProgramType) {
    return await Program.findOneAndUpdate({ _id: id }, program, { new: true })
}