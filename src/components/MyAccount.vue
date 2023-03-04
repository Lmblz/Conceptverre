<template>
    <div class="my-account">
        <section class="my-account__personal-data">
            <h2>Données personnelles</h2>
            <form action="">
                <div>
                    <label for="l-name">Nom de famille</label>
                    <input type="text" name="l-name" value="Leclercq" />
                </div>
                <div>
                    <label for="f-name">Prénom</label>
                    <input type="text" name="f-name" value="Charles" />
                </div>
                <div>
                    <label for="email">Adresse e-mail</label>
                    <input
                        type="email"
                        name="email"
                        value="c.leclercq@gmail.com"
                    />
                </div>
                <div>
                    <label for="password">Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        value="Motdepasse*"
                    />
                </div>
            </form>
        </section>
        <section class="my-account__address">
            <h2>Adresse de facturation</h2>
            <form action="">
                <div>
                    <label for="address">Adresse</label>
                    <input
                        type="text"
                        name="address"
                        value="1 Boulevard Kennedy"
                    />
                </div>
                <div>
                    <label for="zip">Code postal</label>
                    <input type="number" name="zip" value="75000" />
                </div>
                <div>
                    <label for="city">Ville</label>
                    <input type="text" name="city" value="Paris" />
                </div>
            </form>
        </section>
        <button class="btn-black">Enregistrer</button>
    </div>
</template>

<script>
export default {
    name: "MyAccount",
};
</script>

<style lang="scss" scoped>
.my-account {
    h2 {
        line-height: 0.6;
    }
    &__personal-data {
        h2 {
            margin-top: 0 !important;
        }
        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 1rem;

            div {
                display: flex;
                flex-direction: column;

                input {
                    height: 4rem;
                    padding-left: 2rem;
                    font-family: "Silk Serif", Arial, Helvetica, sans-serif !important;
                    font-size: 1.5rem !important;
                    border: solid 1px black;
                    outline: none;
                }
            }
        }
    }

    &__address {
        form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            gap: 1rem;

            div {
                display: flex;
                flex-direction: column;

                &:first-child {
                    grid-column: 1/3;
                }

                input {
                    height: 4rem;
                    padding-left: 2rem;
                    font-family: "Silk Serif", Arial, Helvetica, sans-serif !important;
                    font-size: 1.5rem !important;
                    border: solid 1px black;
                    outline: none;
                }
            }
        }
    }

    button {
        margin-top: 3rem;
        float: right;
        margin-bottom: 6rem;
    }
}
</style>
