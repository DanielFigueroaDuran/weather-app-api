import { FormEvent, useState } from "react";
import { countries } from "../../data/countries"
import styles from "./Form.module.css";
import { SearchType } from "../../types";
import Alert from "../alert/Alert";

const Form = () => {
      const [search, setSearch] = useState<SearchType>({
            city: '',
            country: ''
      });

      const [alert, setAlert] = useState('');

      //console.log(search);

      const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
            {
                  setSearch({
                        ...search,
                        [event.target.name]: event.target.value
                  })
            }
      }

      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (Object.values(search).includes('')) {
                  setAlert('Todos los campos son obligatorios')
                  return
            } else {
                  console.log('enviando');
            }
      }

      return (
            <form
                  className={styles.form}
                  onSubmit={handleSubmit}
            >
                  {alert && <Alert>{alert}</Alert>}

                  <div className={styles.field}>
                        <label htmlFor="city">Ciudad:</label>
                        <input
                              type="text"
                              name="city"
                              id="city"
                              value={search.city}
                              placeholder="Ciudad"
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.field}>
                        <label htmlFor="country">Pais:</label>
                        <select
                              id="country"
                              name="country"
                              value={search.country}
                              onChange={handleChange}
                        >
                              <option value="">-- Seleccione un Pais --</option>
                              {countries.map(country => (
                                    <option
                                          className="bg-slate-800"
                                          key={country.code}
                                          value={country.code}
                                    >
                                          {country.name}
                                    </option>
                              ))}
                        </select>
                  </div>

                  <input className={styles.submit} type="submit" value="Consultar Clima" />
            </form>
      )
}

export default Form