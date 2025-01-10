import { NextResponse } from "next/server";

export async function GET(_request: Request) {

    const subjects: string[] = ["The dog", "The turtle", "My friend", "Sebastian"];
    const predicates: string[] = ["runs fast", "is very wise", "loves coding", "sings poorly"];

    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)]
    const randomPredicates = predicates[Math.floor(Math.random() * predicates.length)]

    let phrase = `${randomSubject} ${randomPredicates}`;

    if (randomSubject.length > 8) {
        phrase = `${randomSubject} intelligent ${randomPredicates}`;
    }

    if (randomPredicates.includes('coding')) {
        phrase = `${randomSubject} ${randomPredicates}!`
    }

    return NextResponse.json({
        phrase
    })
}