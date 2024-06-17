'use client';
import NotDone from "../Components/NotDone";
import { Title } from "../Components/Title";

export default function Utleie() {
    return (
        <main className="flex flex-col items-center justify-center pt-24 gap-2 w-full">
            <span className="w-full">
            <Title text="Utleie"/>
            </span>
            <NotDone />
        </main>
    );
}
