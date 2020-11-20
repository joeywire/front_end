export const returnFamilyValues = (formValues) => {
    const {
        case_children,
        case_adults,
        total_bednights,
        homeless_start_date,
        length_of_time_homeless,
        times_homeless_last_3years,
        total_months_homeless,
        housing_status,
        state,
        zip,
        city,
        living_situation,
        last_perm_address,
        personal_phone,
        work_phone,
        emergency_contact_name,
        emergency_contact_number,
        other_public,
        state_funded,
        indian_health_services,
        other,
        combined_childrens_health_insurance,
        medicaid,
        CHIP,
        VAMS,
        Private_employer,
        private_individual,
        domestic_violence,
        currently_fleeing,
        when_dv_occured,
        vehicle_make,
        vehicle_model,
        vehicle_year,
        vehicle_color,
        vehicle_lic
    } = formValues;

    return {
        case_children,
        case_adults,
        total_bednights,
        homeless_start_date,
        length_of_time_homeless,
        times_homeless_last_3years,
        total_months_homeless,
        housing_status,
        state,
        zip,
        city,
        living_situation,
        last_perm_address,
        personal_phone,
        work_phone,
        emergency_contact_name,
        emergency_contact_number,
        other_public,
        state_funded,
        indian_health_services,
        other,
        combined_childrens_health_insurance,
        medicaid,
        CHIP,
        VAMS,
        Private_employer,
        private_individual,
        domestic_violence,
        currently_fleeing,
        when_dv_occured,
        vehicle_make,
        vehicle_model,
        vehicle_year,
        vehicle_color,
        vehicle_lic
    };
};

export const returnGuestValues = (formValues) => {

    const {
        engagement_date,
        vet_status,
        relationship_to_HoH,
        first_name,
        last_name,
        last_4_digits_of_ssn,
        dob,
        age_at_enrollment,
        race,
        ethnicity,
        gender,
        in_school,
        connected_to_MVento,
        last_grade_completed,
        school_status,
        alcohol_abuse,
        chronic_health_condition,
        developmental_disability,
        substance_abuse,
        HIV_AIDS,
        mental_health_problem,
        physical_disability,
        pregnancy_due_date
    } = formValues

    return {
        engagement_date,
        vet_status,
        relationship_to_HoH,
        first_name,
        last_name,
        last_4_digits_of_ssn,
        dob,
        age_at_enrollment,
        race,
        ethnicity,
        gender,
        in_school,
        connected_to_MVento,
        last_grade_completed,
        school_status,
        alcohol_abuse,
        chronic_health_condition,
        developmental_disability,
        substance_abuse,
        HIV_AIDS,
        mental_health_problem,
        physical_disability,
        pregnancy_due_date
    }

}