import propTypes from "prop-types";

const PokemonCardStats = ({ stats }) => {
  function unwrapStat(s) {
    return Object.keys(s).includes("stat") ? s.stat : "";
  }

  function evaluateStat(num){
    if(num < 50){
        return "bad"
    }else if(num < 100){
        return "average"
    }else{
        return "good"
    }
  }

  return (
    <>
      {stats.length > 0
        ? stats.map((stat) => (
            <div key={stat} className="pkmnCard__stats__item">
              <span>{unwrapStat(stat).name}</span>
              <span className={`statChip statChip--${evaluateStat(stat.base_stat)}`}>{stat.base_stat}</span>
            </div>
          ))
        : ""}
    </>
  );
};

PokemonCardStats.propTypes = {
  stats: propTypes.array,
};

PokemonCardStats.defaultProps = {
  stats: [],
};

export default PokemonCardStats;
