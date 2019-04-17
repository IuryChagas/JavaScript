function personalFinances (goal1, goal2) {
    const justPayTheBills =  true;
    const emergencyReservation = goal1 || goal2; // reserva se goal1 |ou| goal2 are = ok!
    const investment = goal1 && goal2; // investment if goal1 &and& goal2 are = ok!
        
        return {justPayTheBills, emergencyReservation, investment}
 }

console.log(personalFinances(true, true));