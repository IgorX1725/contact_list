import React from 'react';

class Filters extends React.Component {

 constructor(props){
  super(props)
  this.state = {
    searchChange: this.props.searchChange,
    searchClick : this.props.searchClick,
  }
 }

	render() {
		return (
		<div className="container" data-testid="filters">
          <section className="filters">
            <div className="filters__search">
              <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.state.searchChange} />

              <button className="filters__search__icon">
                <i className="fa fa-search"/>
              </button>
            </div>

            <button name="name" className={this.props.orderBy === "name" ? "filters__item is-selected" :"filters__item"} onClick={this.state.searchClick}>
              Nome <i className="fas fa-sort-down"/>
            </button>

            <button name="country" className={this.props.orderBy === "country" ? "filters__item is-selected" :"filters__item"} onClick={this.state.searchClick}>
              País <i className="fas fa-sort-down" />
            </button>

            <button name="company" className={this.props.orderBy === "company" ? "filters__item is-selected" :"filters__item"} onClick={this.state.searchClick}>
              Empresa <i className="fas fa-sort-down" />
            </button>

            <button name="department" className={this.props.orderBy === "department" ? "filters__item is-selected" :"filters__item"} onClick={this.state.searchClick}>
              Departamento <i className="fas fa-sort-down" />
            </button>

            <button name="admissionDate" className={this.props.orderBy === "admissionDate" ? "filters__item is-selected" :"filters__item"} onClick={this.state.searchClick}>
              Data de admissão <i className="fas fa-sort-down" />
            </button>
          </section>
        </div>
		);
	}
}

export default Filters;
