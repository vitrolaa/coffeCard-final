import { Header } from "../../components/header";
import { MapPin, ShoppingCart, CircleDollarSign } from "lucide-react";
import "./style.css";

export function Checkout() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="leftSide">
          <div className="informacoes">
            <form>
              <h2>Endereço de Entrega</h2>

              <input type="text" placeholder="CEP" />

              <input type="text" placeholder="Rua" />

              <input type="number" placeholder="Número" />

              <input type="text" placeholder="Complemento" />

              <input type="text" placeholder="Bairro" />

              <input type="text" placeholder="Cidade" />

              <input type="text" placeholder="UF" />
            </form>
          </div>

          <div id="pagamento">
            <form>
              <CircleDollarSign></CircleDollarSign>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div class="botao">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="switch">
                      <input
                        id="switch-y"
                        name="tripple"
                        type="radio"
                        value="Y"
                        class="switch-input"
                      />
                      <label for="switch-y" class="switch-label switch-label-y">
                        Cartão de Credito
                      </label>
                      <input
                        id="switch-i"
                        name="tripple"
                        type="radio"
                        value="I"
                        class="switch-input"
                      />
                      <label for="switch-i" class="switch-label switch-label-i">
                        Cartão de Debito
                      </label>
                      <input
                        id="switch-n"
                        name="tripple"
                        type="radio"
                        value="N"
                        class="switch-input"
                      />
                      <label for="switch-n" class="switch-label switch-label-n">
                        Dinheiro
                      </label>
                      <span class="switch-selector"></span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="carrinho"></div>
      </div>
    </>
  );
}
