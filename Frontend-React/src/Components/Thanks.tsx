import { useNavigate } from "react-router-dom"

export function Thanks(props: any) {
    props.setShowSlide(false)
    return (
        <>
            <br />  <br /> <br />

            <h1>Your order has been successfully placed</h1>
            <img src={'/imagesForCards/v.gif'}></img>
            <br />
            <h2>Here are the house rules:</h2><br />
            <p style={{marginRight: "30vw", marginLeft: "30vw"}}>Check-in and check-out times: Guests are welcome to check-in{'\t'}
            starting at 3:00 PM on the day of arrival and must check-out by 11:00 AM on the day of departure.
            Late check-out may be available for an additional fee.
            <br/><br/>
            Cleaning and maintenance:
            Guests are responsible for keeping the apartment clean and tidy during their stay.
            They should report any damages or maintenance issues to me as soon as they occur, so that they can be resolved promptly.
            <br/><br/>
            Safety and emergency instructions: Guests should familiarize themselves with the location of the fire extinguisher, fire alarms, and emergency exits. In case of emergency, they should immediately call the emergency number: 100 for police, 101 for ambulance and 102 for fire department.
            <br/><br/>
            Quiet hours: Guests are expected to respect the quiet hours from 10:00 PM to 8:00 AM, and refrain from making excessive noise or disturbing other residents of the building.
            <br/><br/>
            House rules: Guests are not allowed to smoke inside the apartment or bring pets. Guests are also responsible for maintaining the safety and cleanliness of the apartment while they are staying there and leaving it in the same condition as they received it.
            <br/><br/>
            Taxes: Guests will be responsible for paying 17% VAT (Value-Added Tax) on the total rent amount, which should be added to the total amount paid.
        </p>
        <br/><br/>
        </>
    )
}