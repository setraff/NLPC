import dateparser

def get_dates(text):
    text = text.upper()
    title, possible_dates = text.split(',', 1)

    if " TO " in possible_dates:
        from_part = possible_dates.split(" TO ", 1)[0].strip()
        to_part = possible_dates.split(" TO ", 1)[1].strip()

        from_date = dateparser.parse(from_part)
        to_date = dateparser.parse(to_part)

        if from_date:
            from_date = from_date.isoformat()
        if to_date:
            to_date = to_date.isoformat()

        return title.title(), from_date, to_date
    else:
        date =dateparser.parse(possible_dates)
        if date:
            date = date.isoformat()
        return title.title(), date, date
    