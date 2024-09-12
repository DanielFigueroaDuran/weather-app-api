import { countries } from "../../data/countries"

const Form = () => {
      return (
            <form>
                  <div>
                        <label htmlFor="city">Ciudad</label>
                        <input
                              type="text"
                              name="city"
                              id="city"
                        />
                  </div>

                  <div>
                        <label htmlFor="country">Pais:</label>
                        <select >
                              <option value="">-- Seleccione un Pais --</option>
                              {countries.map(country => (
                                    <option
                                          key={country.code}
                                          value={country.code}
                                    >
                                          {country.name}
                                    </option>
                              ))}
                        </select>
                  </div>

                  <input type="submit" value="Consultar Clima" />
            </form>
      )
}

export default Form