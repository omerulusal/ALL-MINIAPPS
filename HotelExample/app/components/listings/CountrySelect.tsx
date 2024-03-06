"use client"
import Select from "react-select"
import countries from "world-countries";

export const getCountries = countries.map((country) => ({
    name: country.name.common,
    flag: country.flag,
    lating: country.latlng,
}));

type CountrySelectProps = {
    value?: string | any;
    onChange: (value: string) => void
};

const options: any = getCountries.map((country) => ({
    value: country.name,
    label: (
        <div className="flex items-center gap-2">
            <span>{country.flag}</span>
            <span>{country.name}</span>
        </div>
    ),
}));

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
    return (
        <div>
            <Select
                placeholder="Ulke Sec"
                options={options}
                value={value}
                onChange={(value) => onChange(value?.value)}
                isSearchable
                formatOptionLabel={(val:any)=>(
                    <div className="flex items-center gap-2">
                        {val.flag}{val.value}
                    </div>
                )}
            />
        </div>
    )
}

export default CountrySelect