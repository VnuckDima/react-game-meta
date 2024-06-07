import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../../../entities/Card/ui";
import { gamesThunks } from "../../../shared/api/gamesThunks";
import { GamesState } from "../../../store/slices/gamesSlice";
import { AppDispatch, RootState } from "../../../store/store";
import styles from "./styles.module.css";

const Catalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { games, loading, error } = useSelector<RootState, GamesState>(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(gamesThunks());
  }, [dispatch]);

  return (
    <div className={styles.catalogWrapper}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className={styles.normalizeWrapper}>
        {games.map(({ id, released, rating, background_image, name }) => (
          <CustomCard
            key={id}
            background_image={background_image}
            name={name}
            released={released}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
